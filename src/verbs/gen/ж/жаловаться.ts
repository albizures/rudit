import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жаловаться: PerfectVerb = {
  name: Word('жаловаться', 1),
  singular1stPerson: Word('жалуюсь', 1),
  singular2ndPerson: Word('жалуешься', 1),
  singular3rdPerson: Word('жалуется', 1),
  plural1stPerson: Word('жалуемся', 1),
  plural2ndPerson: Word('жалуетесь', 1),
  plural3rdPerson: Word('жалуются', 1),
  masculinePast: Word('жаловался', 1),
  femininePast: Word('жаловалась', 1),
  neuterPast: Word('жаловалось', 1),
  pluralPast: Word('жаловались', 1),
  imperativeInformal: Word('жалуйся', 1),
  imperativeFormal: Word('жалуйтесь', 1),
  imperfect: ['пожаловаться'],
};

perfectVerbs.set(жаловаться.name.text, жаловаться);

export { жаловаться };