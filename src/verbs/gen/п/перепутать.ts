import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепутать: PerfectVerb = {
  name: Word('перепутать', 5),
  singular1stPerson: Word('перепутаю', 5),
  singular2ndPerson: Word('перепутаешь', 5),
  singular3rdPerson: Word('перепутает', 5),
  plural1stPerson: Word('перепутаем', 5),
  plural2ndPerson: Word('перепутаете', 5),
  plural3rdPerson: Word('перепутают', 5),
  masculinePast: Word('перепутал', 5),
  femininePast: Word('перепутала', 5),
  neuterPast: Word('перепутало', 5),
  pluralPast: Word('перепутали', 5),
  imperativeInformal: Word('перепутай', 5),
  imperativeFormal: Word('перепутайте', 5),
  imperfect: [],
};

perfectVerbs.set(перепутать.name.text, перепутать);

export { перепутать };