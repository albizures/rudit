import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепутываться: PerfectVerb = {
  name: Word('перепутываться', 5),
  singular1stPerson: Word('перепутываюсь', 5),
  singular2ndPerson: Word('перепутываешься', 5),
  singular3rdPerson: Word('перепутывается', 5),
  plural1stPerson: Word('перепутываемся', 5),
  plural2ndPerson: Word('перепутываетесь', 5),
  plural3rdPerson: Word('перепутываются', 5),
  masculinePast: Word('перепутывался', 5),
  femininePast: Word('перепутывалась', 5),
  neuterPast: Word('перепутывалось', 5),
  pluralPast: Word('перепутывались', 5),
  imperativeInformal: Word('перепутывайся', 5),
  imperativeFormal: Word('перепутывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перепутываться.name.text, перепутываться);

export { перепутываться };