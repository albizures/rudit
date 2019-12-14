import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const знаться: PerfectVerb = {
  name: Word('знаться', 2),
  singular1stPerson: Word('знаюсь', 2),
  singular2ndPerson: Word('знаешься', 2),
  singular3rdPerson: Word('знается', 2),
  plural1stPerson: Word('знаемся', 2),
  plural2ndPerson: Word('знаетесь', 2),
  plural3rdPerson: Word('знаются', 2),
  masculinePast: Word('знался', 2),
  femininePast: Word('зналась', 2),
  neuterPast: Word('зналось', 2),
  pluralPast: Word('знались', 2),
  imperativeInformal: Word('знайся', 2),
  imperativeFormal: Word('знайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(знаться.name.text, знаться);

export { знаться };