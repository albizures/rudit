import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрепляться: PerfectVerb = {
  name: Word('прикрепляться', 8),
  singular1stPerson: Word('прикрепляюсь', 8),
  singular2ndPerson: Word('прикрепляешься', 8),
  singular3rdPerson: Word('прикрепляется', 8),
  plural1stPerson: Word('прикрепляемся', 8),
  plural2ndPerson: Word('прикрепляетесь', 8),
  plural3rdPerson: Word('прикрепляются', 8),
  masculinePast: Word('прикреплялся', 8),
  femininePast: Word('прикреплялась', 8),
  neuterPast: Word('прикреплялось', 8),
  pluralPast: Word('прикреплялись', 8),
  imperativeInformal: Word('прикрепляйся', 8),
  imperativeFormal: Word('прикрепляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(прикрепляться.name.text, прикрепляться);

export { прикрепляться };