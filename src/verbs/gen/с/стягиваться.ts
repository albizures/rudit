import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стягиваться: PerfectVerb = {
  name: Word('стягиваться', 2),
  singular1stPerson: Word('стягиваюсь', 2),
  singular2ndPerson: Word('стягиваешься', 2),
  singular3rdPerson: Word('стягивается', 2),
  plural1stPerson: Word('стягиваемся', 2),
  plural2ndPerson: Word('стягиваетесь', 2),
  plural3rdPerson: Word('стягиваются', 2),
  masculinePast: Word('стягивался', 2),
  femininePast: Word('стягивалась', 2),
  neuterPast: Word('стягивалось', 2),
  pluralPast: Word('стягивались', 2),
  imperativeInformal: Word('стягивайся', 2),
  imperativeFormal: Word('стягивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(стягиваться.name.text, стягиваться);

export { стягиваться };