import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ответвляться: PerfectVerb = {
  name: Word('ответвляться', 7),
  singular1stPerson: Word('ответвляюсь', 7),
  singular2ndPerson: Word('ответвляешься', 7),
  singular3rdPerson: Word('ответвляется', 7),
  plural1stPerson: Word('ответвляемся', 7),
  plural2ndPerson: Word('ответвляетесь', 7),
  plural3rdPerson: Word('ответвляются', 7),
  masculinePast: Word('ответвлялся', 7),
  femininePast: Word('ответвлялась', 7),
  neuterPast: Word('ответвлялось', 7),
  pluralPast: Word('ответвлялись', 7),
  imperativeInformal: Word('ответвляйся', 7),
  imperativeFormal: Word('ответвляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(ответвляться.name.text, ответвляться);

export { ответвляться };