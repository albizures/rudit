import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыскиваться: PerfectVerb = {
  name: Word('отыскиваться', 2),
  singular1stPerson: Word('отыскиваюсь', 2),
  singular2ndPerson: Word('отыскиваешься', 2),
  singular3rdPerson: Word('отыскивается', 2),
  plural1stPerson: Word('отыскиваемся', 2),
  plural2ndPerson: Word('отыскиваетесь', 2),
  plural3rdPerson: Word('отыскиваются', 2),
  masculinePast: Word('отыскивался', 2),
  femininePast: Word('отыскивалась', 2),
  neuterPast: Word('отыскивалось', 2),
  pluralPast: Word('отыскивались', 2),
  imperativeInformal: Word('отыскивайся', 2),
  imperativeFormal: Word('отыскивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(отыскиваться.name.text, отыскиваться);

export { отыскиваться };