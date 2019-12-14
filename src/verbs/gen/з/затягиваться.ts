import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затягиваться: PerfectVerb = {
  name: Word('затягиваться', 3),
  singular1stPerson: Word('затягиваюсь', 3),
  singular2ndPerson: Word('затягиваешься', 3),
  singular3rdPerson: Word('затягивается', 3),
  plural1stPerson: Word('затягиваемся', 3),
  plural2ndPerson: Word('затягиваетесь', 3),
  plural3rdPerson: Word('затягиваются', 3),
  masculinePast: Word('затягивался', 3),
  femininePast: Word('затягивалась', 3),
  neuterPast: Word('затягивалось', 3),
  pluralPast: Word('затягивались', 3),
  imperativeInformal: Word('затягивайся', 3),
  imperativeFormal: Word('затягивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(затягиваться.name.text, затягиваться);

export { затягиваться };