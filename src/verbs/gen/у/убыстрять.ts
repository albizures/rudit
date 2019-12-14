import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убыстрять: PerfectVerb = {
  name: Word('убыстрять', 6),
  singular1stPerson: Word('убыстряю', 6),
  singular2ndPerson: Word('убыстряешь', 6),
  singular3rdPerson: Word('убыстряет', 6),
  plural1stPerson: Word('убыстряем', 6),
  plural2ndPerson: Word('убыстряете', 6),
  plural3rdPerson: Word('убыстряют', 6),
  masculinePast: Word('убыстрял', 6),
  femininePast: Word('убыстряла', 6),
  neuterPast: Word('убыстряло', 6),
  pluralPast: Word('убыстряли', 6),
  imperativeInformal: Word('убыстряй', 6),
  imperativeFormal: Word('убыстряйте', 6),
  imperfect: ['убыстрить'],
};

perfectVerbs.set(убыстрять.name.text, убыстрять);

export { убыстрять };