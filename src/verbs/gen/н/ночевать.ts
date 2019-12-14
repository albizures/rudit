import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ночевать: PerfectVerb = {
  name: Word('ночевать', 5),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('ночевал', 5),
  femininePast: Word('ночевала', 5),
  neuterPast: Word('ночевало', 5),
  pluralPast: Word('ночевали', 5),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['заночевать','переночевать'],
};

perfectVerbs.set(ночевать.name.text, ночевать);

export { ночевать };