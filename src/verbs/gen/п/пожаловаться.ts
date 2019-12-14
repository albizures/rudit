import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожаловаться: PerfectVerb = {
  name: Word('пожаловаться', 3),
  singular1stPerson: Word('пожалуюсь', 3),
  singular2ndPerson: Word('пожалуешься', 3),
  singular3rdPerson: Word('пожалуется', 3),
  plural1stPerson: Word('пожалуемся', 3),
  plural2ndPerson: Word('пожалуетесь', 3),
  plural3rdPerson: Word('пожалуются', 3),
  masculinePast: Word('пожаловался', 3),
  femininePast: Word('пожаловалась', 3),
  neuterPast: Word('пожаловалось', 3),
  pluralPast: Word('пожаловались', 3),
  imperativeInformal: Word('пожалуйся', 3),
  imperativeFormal: Word('пожалуйтесь', 3),
  imperfect: ['жаловаться'],
};

perfectVerbs.set(пожаловаться.name.text, пожаловаться);

export { пожаловаться };