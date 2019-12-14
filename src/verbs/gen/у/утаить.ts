import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утаить: PerfectVerb = {
  name: Word('утаить', 3),
  singular1stPerson: Word('утаю', 3),
  singular2ndPerson: Word('утаишь', 3),
  singular3rdPerson: Word('утаит', 3),
  plural1stPerson: Word('утаим', 3),
  plural2ndPerson: Word('утаите', 3),
  plural3rdPerson: Word('утаят', 3),
  masculinePast: Word('утаил', 3),
  femininePast: Word('утаила', 3),
  neuterPast: Word('утаило', 3),
  pluralPast: Word('утаили', 3),
  imperativeInformal: Word('утаи', 3),
  imperativeFormal: Word('утаите', 3),
  imperfect: [],
};

perfectVerbs.set(утаить.name.text, утаить);

export { утаить };