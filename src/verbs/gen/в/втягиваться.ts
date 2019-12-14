import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втягиваться: PerfectVerb = {
  name: Word('втягиваться', 2),
  singular1stPerson: Word('втягиваюсь', 2),
  singular2ndPerson: Word('втягиваешься', 2),
  singular3rdPerson: Word('втягивается', 2),
  plural1stPerson: Word('втягиваемся', 2),
  plural2ndPerson: Word('втягиваетесь', 2),
  plural3rdPerson: Word('втягиваются', 2),
  masculinePast: Word('втягивался', 2),
  femininePast: Word('втягивалась', 2),
  neuterPast: Word('втягивалось', 2),
  pluralPast: Word('втягивались', 2),
  imperativeInformal: Word('втягивайся', 2),
  imperativeFormal: Word('втягивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(втягиваться.name.text, втягиваться);

export { втягиваться };