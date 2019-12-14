import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растревожить: PerfectVerb = {
  name: Word('растревожить', 7),
  singular1stPerson: Word('растревожу', 7),
  singular2ndPerson: Word('растревожишь', 7),
  singular3rdPerson: Word('растревожит', 7),
  plural1stPerson: Word('растревожим', 7),
  plural2ndPerson: Word('растревожите', 7),
  plural3rdPerson: Word('растревожат', 7),
  masculinePast: Word('растревожил', 7),
  femininePast: Word('растревожила', 7),
  neuterPast: Word('растревожило', 7),
  pluralPast: Word('растревожили', 7),
  imperativeInformal: Word('растревожь', 7),
  imperativeFormal: Word('растревожьте', 7),
  imperfect: [],
};

perfectVerbs.set(растревожить.name.text, растревожить);

export { растревожить };