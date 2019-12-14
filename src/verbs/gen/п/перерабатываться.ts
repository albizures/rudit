import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерабатываться: PerfectVerb = {
  name: Word('перерабатываться', 7),
  singular1stPerson: Word('перерабатываюсь', 7),
  singular2ndPerson: Word('перерабатываешься', 7),
  singular3rdPerson: Word('перерабатывается', 7),
  plural1stPerson: Word('перерабатываемся', 7),
  plural2ndPerson: Word('перерабатываетесь', 7),
  plural3rdPerson: Word('перерабатываются', 7),
  masculinePast: Word('перерабатывался', 7),
  femininePast: Word('перерабатывалась', 7),
  neuterPast: Word('перерабатывалось', 7),
  pluralPast: Word('перерабатывались', 7),
  imperativeInformal: Word('перерабатывайся', 7),
  imperativeFormal: Word('перерабатывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перерабатываться.name.text, перерабатываться);

export { перерабатываться };