import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истомить: PerfectVerb = {
  name: Word('истомить', 5),
  singular1stPerson: Word('истомлю', 6),
  singular2ndPerson: Word('истомишь', 5),
  singular3rdPerson: Word('истомит', 5),
  plural1stPerson: Word('истомим', 5),
  plural2ndPerson: Word('истомите', 5),
  plural3rdPerson: Word('истомят', 5),
  masculinePast: Word('истомил', 5),
  femininePast: Word('истомила', 5),
  neuterPast: Word('истомило', 5),
  pluralPast: Word('истомили', 5),
  imperativeInformal: Word('истоми', 5),
  imperativeFormal: Word('истомите', 5),
  imperfect: [],
};

perfectVerbs.set(истомить.name.text, истомить);

export { истомить };