import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемалываться: PerfectVerb = {
  name: Word('перемалываться', 5),
  singular1stPerson: Word('перемалываюсь', 5),
  singular2ndPerson: Word('перемалываешься', 5),
  singular3rdPerson: Word('перемалывается', 5),
  plural1stPerson: Word('перемалываемся', 5),
  plural2ndPerson: Word('перемалываетесь', 5),
  plural3rdPerson: Word('перемалываются', 5),
  masculinePast: Word('перемалывался', 5),
  femininePast: Word('перемалывалась', 5),
  neuterPast: Word('перемалывалось', 5),
  pluralPast: Word('перемалывались', 5),
  imperativeInformal: Word('перемалывайся', 5),
  imperativeFormal: Word('перемалывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перемалываться.name.text, перемалываться);

export { перемалываться };