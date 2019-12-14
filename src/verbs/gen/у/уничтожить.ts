import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уничтожить: PerfectVerb = {
  name: Word('уничтожить', 5),
  singular1stPerson: Word('уничтожу', 5),
  singular2ndPerson: Word('уничтожишь', 5),
  singular3rdPerson: Word('уничтожит', 5),
  plural1stPerson: Word('уничтожим', 5),
  plural2ndPerson: Word('уничтожите', 5),
  plural3rdPerson: Word('уничтожат', 5),
  masculinePast: Word('уничтожил', 5),
  femininePast: Word('уничтожила', 5),
  neuterPast: Word('уничтожило', 5),
  pluralPast: Word('уничтожили', 5),
  imperativeInformal: Word('уничтожь', 5),
  imperativeFormal: Word('уничтожьте', 5),
  imperfect: [],
};

perfectVerbs.set(уничтожить.name.text, уничтожить);

export { уничтожить };