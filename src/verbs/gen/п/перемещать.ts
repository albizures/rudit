import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемещать: PerfectVerb = {
  name: Word('перемещать', 7),
  singular1stPerson: Word('перемещаю', 7),
  singular2ndPerson: Word('перемещаешь', 7),
  singular3rdPerson: Word('перемещает', 7),
  plural1stPerson: Word('перемещаем', 7),
  plural2ndPerson: Word('перемещаете', 7),
  plural3rdPerson: Word('перемещают', 7),
  masculinePast: Word('перемещал', 7),
  femininePast: Word('перемещала', 7),
  neuterPast: Word('перемещало', 7),
  pluralPast: Word('перемещали', 7),
  imperativeInformal: Word('перемещай', 7),
  imperativeFormal: Word('перемещайте', 7),
  imperfect: ['переместить'],
};

perfectVerbs.set(перемещать.name.text, перемещать);

export { перемещать };