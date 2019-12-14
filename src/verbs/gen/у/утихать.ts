import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утихать: PerfectVerb = {
  name: Word('утихать', 4),
  singular1stPerson: Word('утихаю', 4),
  singular2ndPerson: Word('утихаешь', 4),
  singular3rdPerson: Word('утихает', 4),
  plural1stPerson: Word('утихаем', 4),
  plural2ndPerson: Word('утихаете', 4),
  plural3rdPerson: Word('утихают', 4),
  masculinePast: Word('утихал', 4),
  femininePast: Word('утихала', 4),
  neuterPast: Word('утихало', 4),
  pluralPast: Word('утихали', 4),
  imperativeInformal: Word('утихай', 4),
  imperativeFormal: Word('утихайте', 4),
  imperfect: ['утихнуть'],
};

perfectVerbs.set(утихать.name.text, утихать);

export { утихать };