import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лебезить: PerfectVerb = {
  name: Word('лебезить', 5),
  singular1stPerson: Word('лебежу', 5),
  singular2ndPerson: Word('лебезишь', 5),
  singular3rdPerson: Word('лебезит', 5),
  plural1stPerson: Word('лебезим', 5),
  plural2ndPerson: Word('лебезите', 5),
  plural3rdPerson: Word('лебезят', 5),
  masculinePast: Word('лебезил', 5),
  femininePast: Word('лебезила', 5),
  neuterPast: Word('лебезило', 5),
  pluralPast: Word('лебезили', 5),
  imperativeInformal: Word('лебези', 5),
  imperativeFormal: Word('лебезите', 5),
  imperfect: [],
};

perfectVerbs.set(лебезить.name.text, лебезить);

export { лебезить };