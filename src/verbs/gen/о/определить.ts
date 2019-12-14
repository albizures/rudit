import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const определить: PerfectVerb = {
  name: Word('определить', 7),
  singular1stPerson: Word('определю', 7),
  singular2ndPerson: Word('определишь', 7),
  singular3rdPerson: Word('определит', 7),
  plural1stPerson: Word('определим', 7),
  plural2ndPerson: Word('определите', 7),
  plural3rdPerson: Word('определят', 7),
  masculinePast: Word('определил', 7),
  femininePast: Word('определила', 7),
  neuterPast: Word('определило', 7),
  pluralPast: Word('определили', 7),
  imperativeInformal: Word('определи', 7),
  imperativeFormal: Word('определите', 7),
  imperfect: ['определять'],
};

perfectVerbs.set(определить.name.text, определить);

export { определить };