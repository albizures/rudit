import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пользоваться: PerfectVerb = {
  name: Word('пользоваться', 1),
  singular1stPerson: Word('пользуюсь', 1),
  singular2ndPerson: Word('пользуешься', 1),
  singular3rdPerson: Word('пользуется', 1),
  plural1stPerson: Word('пользуемся', 1),
  plural2ndPerson: Word('пользуетесь', 1),
  plural3rdPerson: Word('пользуются', 1),
  masculinePast: Word('пользовался', 1),
  femininePast: Word('пользовалась', 1),
  neuterPast: Word('пользовалось', 1),
  pluralPast: Word('пользовались', 1),
  imperativeInformal: Word('пользуйся', 1),
  imperativeFormal: Word('пользуйтесь', 1),
  imperfect: ['воспользоваться','попользоваться'],
};

perfectVerbs.set(пользоваться.name.text, пользоваться);

export { пользоваться };