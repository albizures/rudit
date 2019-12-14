import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посетить: PerfectVerb = {
  name: Word('посетить', 5),
  singular1stPerson: Word('посещу', 5),
  singular2ndPerson: Word('посетишь', 5),
  singular3rdPerson: Word('посетит', 5),
  plural1stPerson: Word('посетим', 5),
  plural2ndPerson: Word('посетите', 5),
  plural3rdPerson: Word('посетят', 5),
  masculinePast: Word('посетил', 5),
  femininePast: Word('посетила', 5),
  neuterPast: Word('посетило', 5),
  pluralPast: Word('посетили', 5),
  imperativeInformal: Word('посети', 5),
  imperativeFormal: Word('посетите', 5),
  imperfect: ['посещать'],
};

perfectVerbs.set(посетить.name.text, посетить);

export { посетить };