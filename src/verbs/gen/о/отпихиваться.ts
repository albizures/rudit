import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпихиваться: PerfectVerb = {
  name: Word('отпихиваться', 3),
  singular1stPerson: Word('отпихиваюсь', 3),
  singular2ndPerson: Word('отпихиваешься', 3),
  singular3rdPerson: Word('отпихивается', 3),
  plural1stPerson: Word('отпихиваемся', 3),
  plural2ndPerson: Word('отпихиваетесь', 3),
  plural3rdPerson: Word('отпихиваются', 3),
  masculinePast: Word('отпихивался', 3),
  femininePast: Word('отпихивалась', 3),
  neuterPast: Word('отпихивалось', 3),
  pluralPast: Word('отпихивались', 3),
  imperativeInformal: Word('отпихивайся', 3),
  imperativeFormal: Word('отпихивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отпихиваться.name.text, отпихиваться);

export { отпихиваться };