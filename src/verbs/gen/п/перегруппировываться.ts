import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегруппировываться: PerfectVerb = {
  name: Word('перегруппировываться', 11),
  singular1stPerson: Word('перегруппировываюсь', 11),
  singular2ndPerson: Word('перегруппировываешься', 11),
  singular3rdPerson: Word('перегруппировывается', 11),
  plural1stPerson: Word('перегруппировываемся', 11),
  plural2ndPerson: Word('перегруппировываетесь', 11),
  plural3rdPerson: Word('перегруппировываются', 11),
  masculinePast: Word('перегруппировывался', 11),
  femininePast: Word('перегруппировывалась', 11),
  neuterPast: Word('перегруппировывалось', 11),
  pluralPast: Word('перегруппировывались', 11),
  imperativeInformal: Word('перегруппировывайся', 11),
  imperativeFormal: Word('перегруппировывайтесь', 11),
  imperfect: [],
};

perfectVerbs.set(перегруппировываться.name.text, перегруппировываться);

export { перегруппировываться };