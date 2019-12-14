import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наглядеться: PerfectVerb = {
  name: Word('наглядеться', 6),
  singular1stPerson: Word('нагляжусь', 6),
  singular2ndPerson: Word('наглядишься', 6),
  singular3rdPerson: Word('наглядится', 6),
  plural1stPerson: Word('наглядимся', 6),
  plural2ndPerson: Word('наглядитесь', 6),
  plural3rdPerson: Word('наглядятся', 6),
  masculinePast: Word('нагляделся', 6),
  femininePast: Word('нагляделась', 6),
  neuterPast: Word('нагляделось', 6),
  pluralPast: Word('нагляделись', 6),
  imperativeInformal: Word('наглядись', 6),
  imperativeFormal: Word('наглядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(наглядеться.name.text, наглядеться);

export { наглядеться };