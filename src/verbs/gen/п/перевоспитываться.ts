import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевоспитываться: PerfectVerb = {
  name: Word('перевоспитываться', 8),
  singular1stPerson: Word('перевоспитываюсь', 8),
  singular2ndPerson: Word('перевоспитываешься', 8),
  singular3rdPerson: Word('перевоспитывается', 8),
  plural1stPerson: Word('перевоспитываемся', 8),
  plural2ndPerson: Word('перевоспитываетесь', 8),
  plural3rdPerson: Word('перевоспитываются', 8),
  masculinePast: Word('перевоспитывался', 8),
  femininePast: Word('перевоспитывалась', 8),
  neuterPast: Word('перевоспитывалось', 8),
  pluralPast: Word('перевоспитывались', 8),
  imperativeInformal: Word('перевоспитывайся', 8),
  imperativeFormal: Word('перевоспитывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перевоспитываться.name.text, перевоспитываться);

export { перевоспитываться };