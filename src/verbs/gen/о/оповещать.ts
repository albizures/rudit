import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оповещать: PerfectVerb = {
  name: Word('оповещать', 6),
  singular1stPerson: Word('оповещаю', 6),
  singular2ndPerson: Word('оповещаешь', 6),
  singular3rdPerson: Word('оповещает', 6),
  plural1stPerson: Word('оповещаем', 6),
  plural2ndPerson: Word('оповещаете', 6),
  plural3rdPerson: Word('оповещают', 6),
  masculinePast: Word('оповещал', 6),
  femininePast: Word('оповещала', 6),
  neuterPast: Word('оповещало', 6),
  pluralPast: Word('оповещали', 6),
  imperativeInformal: Word('оповещай', 6),
  imperativeFormal: Word('оповещайте', 6),
  imperfect: ['оповестить'],
};

perfectVerbs.set(оповещать.name.text, оповещать);

export { оповещать };