import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пакостить: PerfectVerb = {
  name: Word('пакостить', 1),
  singular1stPerson: Word('пакощу', 1),
  singular2ndPerson: Word('пакостишь', 1),
  singular3rdPerson: Word('пакостит', 1),
  plural1stPerson: Word('пакостим', 1),
  plural2ndPerson: Word('пакостите', 1),
  plural3rdPerson: Word('пакостят', 1),
  masculinePast: Word('пакостил', 1),
  femininePast: Word('пакостила', 1),
  neuterPast: Word('пакостило', 1),
  pluralPast: Word('пакостили', 1),
  imperativeInformal: Word('пакости', 1),
  imperativeFormal: Word('пакостите', 1),
  imperfect: [],
};

perfectVerbs.set(пакостить.name.text, пакостить);

export { пакостить };