import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекупать: PerfectVerb = {
  name: Word('перекупать', 7),
  singular1stPerson: Word('перекупаю', 7),
  singular2ndPerson: Word('перекупаешь', 7),
  singular3rdPerson: Word('перекупает', 7),
  plural1stPerson: Word('перекупаем', 7),
  plural2ndPerson: Word('перекупаете', 7),
  plural3rdPerson: Word('перекупают', 7),
  masculinePast: Word('перекупал', 7),
  femininePast: Word('перекупала', 7),
  neuterPast: Word('перекупало', 7),
  pluralPast: Word('перекупали', 7),
  imperativeInformal: Word('перекупай', 7),
  imperativeFormal: Word('перекупайте', 7),
  imperfect: [],
};

perfectVerbs.set(перекупать.name.text, перекупать);

export { перекупать };