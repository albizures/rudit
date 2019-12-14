import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просвещать: PerfectVerb = {
  name: Word('просвещать', 7),
  singular1stPerson: Word('просвещаю', 7),
  singular2ndPerson: Word('просвещаешь', 7),
  singular3rdPerson: Word('просвещает', 7),
  plural1stPerson: Word('просвещаем', 7),
  plural2ndPerson: Word('просвещаете', 7),
  plural3rdPerson: Word('просвещают', 7),
  masculinePast: Word('просвещал', 7),
  femininePast: Word('просвещала', 7),
  neuterPast: Word('просвещало', 7),
  pluralPast: Word('просвещали', 7),
  imperativeInformal: Word('просвещай', 7),
  imperativeFormal: Word('просвещайте', 7),
  imperfect: ['просветить'],
};

perfectVerbs.set(просвещать.name.text, просвещать);

export { просвещать };