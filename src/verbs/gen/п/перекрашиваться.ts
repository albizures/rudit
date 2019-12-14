import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрашиваться: PerfectVerb = {
  name: Word('перекрашиваться', 6),
  singular1stPerson: Word('перекрашиваюсь', 6),
  singular2ndPerson: Word('перекрашиваешься', 6),
  singular3rdPerson: Word('перекрашивается', 6),
  plural1stPerson: Word('перекрашиваемся', 6),
  plural2ndPerson: Word('перекрашиваетесь', 6),
  plural3rdPerson: Word('перекрашиваются', 6),
  masculinePast: Word('перекрашивался', 6),
  femininePast: Word('перекрашивалась', 6),
  neuterPast: Word('перекрашивалось', 6),
  pluralPast: Word('перекрашивались', 6),
  imperativeInformal: Word('перекрашивайся', 6),
  imperativeFormal: Word('перекрашивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перекрашиваться.name.text, перекрашиваться);

export { перекрашиваться };