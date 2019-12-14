import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробурчать: PerfectVerb = {
  name: Word('пробурчать', 7),
  singular1stPerson: Word('пробурчу', 7),
  singular2ndPerson: Word('пробурчишь', 7),
  singular3rdPerson: Word('пробурчит', 7),
  plural1stPerson: Word('пробурчим', 7),
  plural2ndPerson: Word('пробурчите', 7),
  plural3rdPerson: Word('пробурчат', 7),
  masculinePast: Word('пробурчал', 7),
  femininePast: Word('пробурчала', 7),
  neuterPast: Word('пробурчало', 7),
  pluralPast: Word('пробурчали', 7),
  imperativeInformal: Word('пробурчи', 7),
  imperativeFormal: Word('пробурчите', 7),
  imperfect: [],
};

perfectVerbs.set(пробурчать.name.text, пробурчать);

export { пробурчать };