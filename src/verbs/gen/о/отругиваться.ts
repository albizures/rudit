import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отругиваться: PerfectVerb = {
  name: Word('отругиваться', 3),
  singular1stPerson: Word('отругиваюсь', 3),
  singular2ndPerson: Word('отругиваешься', 3),
  singular3rdPerson: Word('отругивается', 3),
  plural1stPerson: Word('отругиваемся', 3),
  plural2ndPerson: Word('отругиваетесь', 3),
  plural3rdPerson: Word('отругиваются', 3),
  masculinePast: Word('отругивался', 3),
  femininePast: Word('отругивалась', 3),
  neuterPast: Word('отругивалось', 3),
  pluralPast: Word('отругивались', 3),
  imperativeInformal: Word('отругивайся', 3),
  imperativeFormal: Word('отругивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отругиваться.name.text, отругиваться);

export { отругиваться };