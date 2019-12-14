import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const походить: PerfectVerb = {
  name: Word('походить', 5),
  singular1stPerson: Word('похожу', 5),
  singular2ndPerson: Word('походишь', 3),
  singular3rdPerson: Word('походит', 3),
  plural1stPerson: Word('походим', 3),
  plural2ndPerson: Word('походите', 3),
  plural3rdPerson: Word('походят', 3),
  masculinePast: Word('походил', 5),
  femininePast: Word('походила', 5),
  neuterPast: Word('походило', 5),
  pluralPast: Word('походили', 5),
  imperativeInformal: Word('походи', 5),
  imperativeFormal: Word('походите', 5),
  imperfect: [],
};

perfectVerbs.set(походить.name.text, походить);

export { походить };