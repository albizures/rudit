import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const направляться: PerfectVerb = {
  name: Word('направляться', 7),
  singular1stPerson: Word('направляюсь', 7),
  singular2ndPerson: Word('направляешься', 7),
  singular3rdPerson: Word('направляется', 7),
  plural1stPerson: Word('направляемся', 7),
  plural2ndPerson: Word('направляетесь', 7),
  plural3rdPerson: Word('направляются', 7),
  masculinePast: Word('направлялся', 7),
  femininePast: Word('направлялась', 7),
  neuterPast: Word('направлялось', 7),
  pluralPast: Word('направлялись', 7),
  imperativeInformal: Word('направляйся', 7),
  imperativeFormal: Word('направляйтесь', 7),
  imperfect: ['направиться'],
};

perfectVerbs.set(направляться.name.text, направляться);

export { направляться };