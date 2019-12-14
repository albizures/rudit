import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвергаться: PerfectVerb = {
  name: Word('подвергаться', 7),
  singular1stPerson: Word('подвергаюсь', 7),
  singular2ndPerson: Word('подвергаешься', 7),
  singular3rdPerson: Word('подвергается', 7),
  plural1stPerson: Word('подвергаемся', 7),
  plural2ndPerson: Word('подвергаетесь', 7),
  plural3rdPerson: Word('подвергаются', 7),
  masculinePast: Word('подвергался', 7),
  femininePast: Word('подвергалась', 7),
  neuterPast: Word('подвергалось', 7),
  pluralPast: Word('подвергались', 7),
  imperativeInformal: Word('подвергайся', 7),
  imperativeFormal: Word('подвергайтесь', 7),
  imperfect: ['подвергнуться'],
};

perfectVerbs.set(подвергаться.name.text, подвергаться);

export { подвергаться };