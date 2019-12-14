import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворачиваться: PerfectVerb = {
  name: Word('поворачиваться', 5),
  singular1stPerson: Word('поворачиваюсь', 5),
  singular2ndPerson: Word('поворачиваешься', 5),
  singular3rdPerson: Word('поворачивается', 5),
  plural1stPerson: Word('поворачиваемся', 5),
  plural2ndPerson: Word('поворачиваетесь', 5),
  plural3rdPerson: Word('поворачиваются', 5),
  masculinePast: Word('поворачивался', 5),
  femininePast: Word('поворачивалась', 5),
  neuterPast: Word('поворачивалось', 5),
  pluralPast: Word('поворачивались', 5),
  imperativeInformal: Word('поворачивайся', 5),
  imperativeFormal: Word('поворачивайтесь', 5),
  imperfect: ['повернуться'],
};

perfectVerbs.set(поворачиваться.name.text, поворачиваться);

export { поворачиваться };