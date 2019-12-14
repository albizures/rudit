import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестукиваться: PerfectVerb = {
  name: Word('перестукиваться', 6),
  singular1stPerson: Word('перестукиваюсь', 6),
  singular2ndPerson: Word('перестукиваешься', 6),
  singular3rdPerson: Word('перестукивается', 6),
  plural1stPerson: Word('перестукиваемся', 6),
  plural2ndPerson: Word('перестукиваетесь', 6),
  plural3rdPerson: Word('перестукиваются', 6),
  masculinePast: Word('перестукивался', 6),
  femininePast: Word('перестукивалась', 6),
  neuterPast: Word('перестукивалось', 6),
  pluralPast: Word('перестукивались', 6),
  imperativeInformal: Word('перестукивайся', 6),
  imperativeFormal: Word('перестукивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перестукиваться.name.text, перестукиваться);

export { перестукиваться };