import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскручиваться: PerfectVerb = {
  name: Word('раскручиваться', 5),
  singular1stPerson: Word('раскручиваюсь', 5),
  singular2ndPerson: Word('раскручиваешься', 5),
  singular3rdPerson: Word('раскручивается', 5),
  plural1stPerson: Word('раскручиваемся', 5),
  plural2ndPerson: Word('раскручиваетесь', 5),
  plural3rdPerson: Word('раскручиваются', 5),
  masculinePast: Word('раскручивался', 5),
  femininePast: Word('раскручивалась', 5),
  neuterPast: Word('раскручивалось', 5),
  pluralPast: Word('раскручивались', 5),
  imperativeInformal: Word('раскручивайся', 5),
  imperativeFormal: Word('раскручивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раскручиваться.name.text, раскручиваться);

export { раскручиваться };