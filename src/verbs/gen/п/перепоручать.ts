import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепоручать: PerfectVerb = {
  name: Word('перепоручать', 9),
  singular1stPerson: Word('перепоручаю', 9),
  singular2ndPerson: Word('перепоручаешь', 9),
  singular3rdPerson: Word('перепоручает', 9),
  plural1stPerson: Word('перепоручаем', 9),
  plural2ndPerson: Word('перепоручаете', 9),
  plural3rdPerson: Word('перепоручают', 9),
  masculinePast: Word('перепоручал', 9),
  femininePast: Word('перепоручала', 9),
  neuterPast: Word('перепоручало', 9),
  pluralPast: Word('перепоручали', 9),
  imperativeInformal: Word('перепоручай', 9),
  imperativeFormal: Word('перепоручайте', 9),
  imperfect: [],
};

perfectVerbs.set(перепоручать.name.text, перепоручать);

export { перепоручать };