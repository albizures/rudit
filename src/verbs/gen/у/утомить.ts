import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утомить: PerfectVerb = {
  name: Word('утомить', 4),
  singular1stPerson: Word('утомлю', 5),
  singular2ndPerson: Word('утомишь', 4),
  singular3rdPerson: Word('утомит', 4),
  plural1stPerson: Word('утомим', 4),
  plural2ndPerson: Word('утомите', 4),
  plural3rdPerson: Word('утомят', 4),
  masculinePast: Word('утомил', 4),
  femininePast: Word('утомила', 4),
  neuterPast: Word('утомило', 4),
  pluralPast: Word('утомили', 4),
  imperativeInformal: Word('утоми', 4),
  imperativeFormal: Word('утомите', 4),
  imperfect: [],
};

perfectVerbs.set(утомить.name.text, утомить);

export { утомить };