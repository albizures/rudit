import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const короноваться: PerfectVerb = {
  name: Word('короноваться', 7),
  singular1stPerson: Word('коронуюсь', 5),
  singular2ndPerson: Word('коронуешься', 5),
  singular3rdPerson: Word('коронуется', 5),
  plural1stPerson: Word('коронуемся', 5),
  plural2ndPerson: Word('коронуетесь', 5),
  plural3rdPerson: Word('коронуются', 5),
  masculinePast: Word('короновался', 7),
  femininePast: Word('короновалась', 7),
  neuterPast: Word('короновалось', 7),
  pluralPast: Word('короновались', 7),
  imperativeInformal: Word('коронуйся', 5),
  imperativeFormal: Word('коронуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(короноваться.name.text, короноваться);

export { короноваться };