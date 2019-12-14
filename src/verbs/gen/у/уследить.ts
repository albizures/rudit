import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уследить: PerfectVerb = {
  name: Word('уследить', 5),
  singular1stPerson: Word('услежу', 5),
  singular2ndPerson: Word('уследишь', 5),
  singular3rdPerson: Word('уследит', 5),
  plural1stPerson: Word('уследим', 5),
  plural2ndPerson: Word('уследите', 5),
  plural3rdPerson: Word('уследят', 5),
  masculinePast: Word('уследил', 5),
  femininePast: Word('уследила', 5),
  neuterPast: Word('уследило', 5),
  pluralPast: Word('уследили', 5),
  imperativeInformal: Word('уследи', 5),
  imperativeFormal: Word('уследите', 5),
  imperfect: [],
};

perfectVerbs.set(уследить.name.text, уследить);

export { уследить };