import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетревожить: PerfectVerb = {
  name: Word('перетревожить', 8),
  singular1stPerson: Word('перетревожу', 8),
  singular2ndPerson: Word('перетревожишь', 8),
  singular3rdPerson: Word('перетревожит', 8),
  plural1stPerson: Word('перетревожим', 8),
  plural2ndPerson: Word('перетревожите', 8),
  plural3rdPerson: Word('перетревожат', 8),
  masculinePast: Word('перетревожил', 8),
  femininePast: Word('перетревожила', 8),
  neuterPast: Word('перетревожило', 8),
  pluralPast: Word('перетревожили', 8),
  imperativeInformal: Word('перетревожь', 8),
  imperativeFormal: Word('перетревожьте', 8),
  imperfect: [],
};

perfectVerbs.set(перетревожить.name.text, перетревожить);

export { перетревожить };