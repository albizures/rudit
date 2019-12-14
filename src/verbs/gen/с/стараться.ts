import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стараться: PerfectVerb = {
  name: Word('стараться', 4),
  singular1stPerson: Word('стараюсь', 4),
  singular2ndPerson: Word('стараешься', 4),
  singular3rdPerson: Word('старается', 4),
  plural1stPerson: Word('стараемся', 4),
  plural2ndPerson: Word('стараетесь', 4),
  plural3rdPerson: Word('стараются', 4),
  masculinePast: Word('старался', 4),
  femininePast: Word('старалась', 4),
  neuterPast: Word('старалось', 4),
  pluralPast: Word('старались', 4),
  imperativeInformal: Word('старайся', 4),
  imperativeFormal: Word('старайтесь', 4),
  imperfect: ['постараться'],
};

perfectVerbs.set(стараться.name.text, стараться);

export { стараться };