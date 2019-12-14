import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передоверять: PerfectVerb = {
  name: Word('передоверять', 9),
  singular1stPerson: Word('передоверяю', 9),
  singular2ndPerson: Word('передоверяешь', 9),
  singular3rdPerson: Word('передоверяет', 9),
  plural1stPerson: Word('передоверяем', 9),
  plural2ndPerson: Word('передоверяете', 9),
  plural3rdPerson: Word('передоверяют', 9),
  masculinePast: Word('передоверял', 9),
  femininePast: Word('передоверяла', 9),
  neuterPast: Word('передоверяло', 9),
  pluralPast: Word('передоверяли', 9),
  imperativeInformal: Word('передоверяй', 9),
  imperativeFormal: Word('передоверяйте', 9),
  imperfect: [],
};

perfectVerbs.set(передоверять.name.text, передоверять);

export { передоверять };