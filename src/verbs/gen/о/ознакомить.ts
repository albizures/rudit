import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ознакомить: PerfectVerb = {
  name: Word('ознакомить', 5),
  singular1stPerson: Word('ознакомлю', 5),
  singular2ndPerson: Word('ознакомишь', 5),
  singular3rdPerson: Word('ознакомит', 5),
  plural1stPerson: Word('ознакомим', 5),
  plural2ndPerson: Word('ознакомите', 5),
  plural3rdPerson: Word('ознакомят', 5),
  masculinePast: Word('ознакомил', 5),
  femininePast: Word('ознакомила', 5),
  neuterPast: Word('ознакомило', 5),
  pluralPast: Word('ознакомили', 5),
  imperativeInformal: Word('ознакомь', 5),
  imperativeFormal: Word('ознакомьте', 5),
  imperfect: [],
};

perfectVerbs.set(ознакомить.name.text, ознакомить);

export { ознакомить };