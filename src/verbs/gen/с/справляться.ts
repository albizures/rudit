import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const справляться: PerfectVerb = {
  name: Word('справляться', 6),
  singular1stPerson: Word('справляюсь', 6),
  singular2ndPerson: Word('справляешься', 6),
  singular3rdPerson: Word('справляется', 6),
  plural1stPerson: Word('справляемся', 6),
  plural2ndPerson: Word('справляетесь', 6),
  plural3rdPerson: Word('справляются', 6),
  masculinePast: Word('справлялся', 6),
  femininePast: Word('справлялась', 6),
  neuterPast: Word('справлялось', 6),
  pluralPast: Word('справлялись', 6),
  imperativeInformal: Word('справляйся', 6),
  imperativeFormal: Word('справляйтесь', 6),
  imperfect: ['справиться'],
};

perfectVerbs.set(справляться.name.text, справляться);

export { справляться };