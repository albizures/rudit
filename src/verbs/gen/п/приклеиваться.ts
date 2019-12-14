import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приклеиваться: PerfectVerb = {
  name: Word('приклеиваться', 5),
  singular1stPerson: Word('приклеиваюсь', 5),
  singular2ndPerson: Word('приклеиваешься', 5),
  singular3rdPerson: Word('приклеивается', 5),
  plural1stPerson: Word('приклеиваемся', 5),
  plural2ndPerson: Word('приклеиваетесь', 5),
  plural3rdPerson: Word('приклеиваются', 5),
  masculinePast: Word('приклеивался', 5),
  femininePast: Word('приклеивалась', 5),
  neuterPast: Word('приклеивалось', 5),
  pluralPast: Word('приклеивались', 5),
  imperativeInformal: Word('приклеивайся', 5),
  imperativeFormal: Word('приклеивайтесь', 5),
  imperfect: ['приклеиться'],
};

perfectVerbs.set(приклеиваться.name.text, приклеиваться);

export { приклеиваться };