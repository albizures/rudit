import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрещиваться: PerfectVerb = {
  name: Word('перекрещиваться', 6),
  singular1stPerson: Word('перекрещиваюсь', 6),
  singular2ndPerson: Word('перекрещиваешься', 6),
  singular3rdPerson: Word('перекрещивается', 6),
  plural1stPerson: Word('перекрещиваемся', 6),
  plural2ndPerson: Word('перекрещиваетесь', 6),
  plural3rdPerson: Word('перекрещиваются', 6),
  masculinePast: Word('перекрещивался', 6),
  femininePast: Word('перекрещивалась', 6),
  neuterPast: Word('перекрещивалось', 6),
  pluralPast: Word('перекрещивались', 6),
  imperativeInformal: Word('перекрещивайся', 6),
  imperativeFormal: Word('перекрещивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перекрещиваться.name.text, перекрещиваться);

export { перекрещиваться };