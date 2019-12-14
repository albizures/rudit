import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утихомирить: PerfectVerb = {
  name: Word('утихомирить', 6),
  singular1stPerson: Word('утихомирю', 6),
  singular2ndPerson: Word('утихомиришь', 6),
  singular3rdPerson: Word('утихомирит', 6),
  plural1stPerson: Word('утихомирим', 6),
  plural2ndPerson: Word('утихомирите', 6),
  plural3rdPerson: Word('утихомирят', 6),
  masculinePast: Word('утихомирил', 6),
  femininePast: Word('утихомирила', 6),
  neuterPast: Word('утихомирило', 6),
  pluralPast: Word('утихомирили', 6),
  imperativeInformal: Word('утихомирь', 6),
  imperativeFormal: Word('утихомирьте', 6),
  imperfect: [],
};

perfectVerbs.set(утихомирить.name.text, утихомирить);

export { утихомирить };